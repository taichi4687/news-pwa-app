class NewsApp {
    constructor() {
        // Guardian APIを使用（完全無料、本番環境対応）
        this.apiKey = 'test'; // Guardian APIは認証不要
        this.baseUrl = 'https://content.guardianapis.com';
        this.currentCategory = 'world';
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadNews();
    }

    bindEvents() {
        const categorySelect = document.getElementById('categorySelect');
        const refreshBtn = document.getElementById('refreshBtn');

        categorySelect.addEventListener('change', (e) => {
            this.currentCategory = e.target.value;
            this.loadNews();
        });

        refreshBtn.addEventListener('click', () => {
            this.loadNews();
        });
    }

    async loadNews() {
        const loading = document.getElementById('loading');
        const error = document.getElementById('error');
        const container = document.getElementById('newsContainer');

        // UI状態をリセット
        loading.classList.remove('hidden');
        error.classList.add('hidden');
        container.innerHTML = '';

        try {
            const sectionMap = {
                'general': 'world',
                'business': 'business',
                'technology': 'technology',
                'sports': 'sport',
                'entertainment': 'culture',
                'health': 'society',
                'science': 'science'
            };

            const section = sectionMap[this.currentCategory] || 'world';
            
            const response = await fetch(
                `${this.baseUrl}/search?section=${section}&show-fields=thumbnail,trailText&page-size=20&api-key=${this.apiKey}`
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.response.status === 'error') {
                throw new Error(data.response.message);
            }

            this.displayNews(data.response.results);
        } catch (err) {
            console.error('ニュース取得エラー:', err);
            this.showError('ニュースの取得に失敗しました。しばらく後に再試行してください。');
        } finally {
            loading.classList.add('hidden');
        }
    }

    displayNews(articles) {
        const container = document.getElementById('newsContainer');
        
        if (!articles || articles.length === 0) {
            container.innerHTML = '<p class="no-news">ニュースが見つかりませんでした。</p>';
            return;
        }

        articles.forEach(article => {
            const newsItem = this.createNewsItem(article);
            container.appendChild(newsItem);
        });
    }

    createNewsItem(article) {
        const item = document.createElement('div');
        item.className = 'news-item';
        
        const publishedDate = new Date(article.webPublicationDate).toLocaleDateString('ja-JP');
        
        item.innerHTML = `
            ${article.fields?.thumbnail ? `<img src="${article.fields.thumbnail}" alt="ニュース画像" onerror="this.style.display='none'">` : ''}
            <div class="news-title">${article.webTitle}</div>
            <div class="news-description">${article.fields?.trailText || ''}</div>
            <div class="news-meta">
                <span class="news-source">The Guardian</span>
                <span class="news-date">${publishedDate}</span>
            </div>
        `;

        item.addEventListener('click', () => {
            if (article.webUrl) {
                window.open(article.webUrl, '_blank');
            }
        });

        return item;
    }

    showError(message) {
        const error = document.getElementById('error');
        error.textContent = message;
        error.classList.remove('hidden');
    }
}

// アプリ初期化
document.addEventListener('DOMContentLoaded', () => {
    new NewsApp();
});