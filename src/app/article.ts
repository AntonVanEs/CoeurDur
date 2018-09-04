export class Article {

    constructor(public title: string, public text: string) { }

    getSampleText(count: number) : string {
        let words = this.text.split(/\s+/).slice(0, count);
        let result = ""
        words.forEach(word => {
            result += word + " ";
        });
        return result.substring(0, result.length - 1);
    }

    getUrl() : string {
        return this.title.toLowerCase().replace(/\s+/g, "_");
    }
}