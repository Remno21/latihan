import React from 'react';

function Header() {
    return (
        <h1>Semua Ada</h1>
    );
}

function Genres() {
    return (
        <div>
            <Header />
            <h2>Daftar Genre Film</h2>
            {/* Anda dapat menambahkan daftar genre di sini */}
        </div>
    );
}

export default Genres;
