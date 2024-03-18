export async function fetchArticles(category = '') {
    try {
        const response = await fetch(`https://murraystatenews.org/wp-json/wp/v2/posts?${category}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching articles:', error);
        throw error;
    }
}


export async function fetchArticleById(articleId) {
    try {
        const response = await fetch(`https://murraystatenews.org/wp-json/wp/v2/posts/${articleId}?_embed`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching article:', error);
        throw error;
    }
}

export async function fetchSportsArticles() {
    try {
        const response = await fetch('https://murraystatenews.org/wp-json/wp/v2/posts?category_name=athletics&_embed');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching sports articles:', error);
        throw error;
    }
}

export async function fetchSportsArticleById(articleId) {
    try {
        const response = await fetch(`https://murraystatenews.org/wp-json/wp/v2/posts/${articleId}?_embed`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching sports article:', error);
        throw error;
    }
}

