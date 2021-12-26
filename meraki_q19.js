var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
let Crorepati_count=0
let Lakhpati_count=0
let Dilwale_count=0
for(let i of kitna_paisa_hai){
    if (i<100000){
        Dilwale_count+=1
    }
    else if (i>=100000 && i<10000000){
        Lakhpati_count+=1

    }
    else if (i>=10000000){
        Crorepati_count+=1
    }
}
console.log(Crorepati_count)
console.log(Lakhpati_count)
console.log(Dilwale_count)