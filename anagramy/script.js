function sortString(str) {
    return str.split('').sort().join('');
}

function areAnagrams(word1, word2) {
    return sortString(word1) === sortString(word2);
}

function znajdzAnagramy() {
    const word1 = document.getElementById('word1').value;
    const word2 = document.getElementById('word2').value;

    if (!word1 || !word2) {
        alert('Wpisz oba słowa');
        return false;
    }
    return areAnagrams(word1, word2);
}