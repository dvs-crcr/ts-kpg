class KeywordGenerator {
    constructor() {

    }
    /** Генерация ключей */
    generate(keys: string[][]): string[] {
        return ['123','321']
    }
    /** Ссылка на файл из строки с данными */
    createBlobUrl(text: string) {
        let blob = new Blob([text], {type: 'text/plain'})
        return window.URL.createObjectURL(blob);
    }
}

