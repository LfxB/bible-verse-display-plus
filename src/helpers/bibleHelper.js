import { bible } from './../data/NKJV.bible.js';

const emptyVerse = {
    "text": "Something went wrong. Invalid Verse.", 
    "num": 0
  }

export const getBookNames = () => {
    return bible.books.map((book, index) => {
        return { name: book.name, index };
    })
}

export const getBookFromIndex = (bookIndex) => {
    if (bookIndex >= bible.books.length) return undefined;

    return bible.books[bookIndex].name;
}

export const getBookChapterCount = (bookIndex) => {
    if (bookIndex >= bible.books.length) return 0;

    return bible.books[bookIndex].chapters.length;
}

export const getVerseCount = (bookIndex, chapterIndex) => {
    if (bookIndex >= bible.books.length) return 0;
    if (chapterIndex >= bible.books[bookIndex].chapters.length) return 0;

    return bible.books[bookIndex].chapters[chapterIndex].verses.length;
}

export const getVersesForChapter = (bookIndex, chapterIndex) => {
    if (bookIndex >= bible.books.length) return [emptyVerse];
    if (chapterIndex >= bible.books[bookIndex].chapters.length) return [emptyVerse];

    return [ ...bible.books[bookIndex].chapters[chapterIndex].verses ]
}

export const getVerse = (bookIndex, chapterIndex, verseIndex) => {
    if (bookIndex >= bible.books.length) return emptyVerse;
    if (chapterIndex >= bible.books[bookIndex].chapters.length) return emptyVerse;
    if (verseIndex >= bible.books[bookIndex].chapters[chapterIndex].verses.length) return emptyVerse;

    return { ...bible.books[bookIndex].chapters[chapterIndex].verses[verseIndex] }
}