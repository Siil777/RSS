function setup() {
    return {
        feed: [],
        sources: [
            'https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss',

        ],
        get(source) {
            fetch(`http://localhost:3000/api/feed?url=${encodeURIComponent(source)}`)
                .then(res => res.json())
                .then(data => {
                    if(Array.isArray(data)){
                        this.feed.push(...data)
                        //console.log('DATA',data);
                    }else{
                        console.log('rss is not an array')
                    }
                    const known =  data;
                    console.log('known',known)
                });

        },
        addToFeed(entry) {
            const alreadyExists = this.feed.some(i => i.link === entry.link);
            if (!alreadyExists) {
                this.feed.push({
                    title: entry.title,
                    link: entry.link,
                    date: new Date(entry.date),
                    contentSnippet: entry.contentSnippet || ''
                });
            }
        },
        init() {
            this.sources.forEach(source => this.get(source));
        }
    };
}