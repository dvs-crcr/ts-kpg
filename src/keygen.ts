class KeywordGenerator {
    constructor(public wish: string | boolean = 'I wish you good luck!') {
        this.wish = true
    }
    /** Подсчет количества результатов */
    count = (keys: string[][]) => keys.map((i) => i.filter(j => j !== '').length).reduce((a, b) => [a[0] * b, (a[0] * b) + a[1]], [1, 0])[1]
    /** Генерация ключей */
    generate(keys: string[][]): string[] {
        let accumulator:string[] = []
        let result:string[] = []
        let recursion = function(arr1: string[], arr2: string[]): string[] {
            let res = []
            if (arr1.length === 0) return arr2
            for (let i = 0; i < arr1.length; i++) {
                for (let j = 0; j < arr2.length; j++) {
                    res.push(`${arr1[i]} ${arr2[j]}`)
                }
            }
            return res
        }
        // можно было бы и reduce, но кажется он будет дольше. хотя хз...
        for (let i = 0; i < keys.length; i++) {
            let recres = recursion(accumulator, keys[i].filter(j => j !== ''))
            accumulator = [...recres]
            result = [...result, ...accumulator]
        }
        return result
    }
    /** Ссылка на файл из строки с данными */
    createBlobUrl = (text: string, type: string = 'text/plain') => window.URL.createObjectURL(new Blob([text], {type: type}))
}
