const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(){
    const copyofCats = [...cats,"Broom"];
    return copyofCats;
}

function prependCat(){
    const allCats = ["Arnold", ...cats];
    return allCats;
}

function removeLastCat(){
    const newcats = cats.slice(0,-1);
    return newcats;
}

function removeFirstCat(){
    const lessCats = cats.slice(1);
    return lessCats;
}
