//Data Dummy
const guestbook = [
    {
        name: "Anita",
        message: "Congratulation"
    },
    {
        name: "Ale",
        message: "Selamat"
    },
    {
        name: "Molly",
        message: "Omedetou Gozaimasu"
    },
    {
        name: "Lala",
        message: "Felicidades"
    }
]

//mengambil elemen dari HTML
const form = document.getElementById("guestbookForm");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const messageList = document.getElementById("messageList");

//menampilkan semua pesan
function renderGuestBook() {
    let html = "";

    for (let i = 0; i < guestbook.length; i++) {
        const entry = guestbook[i];

        html += `
        <li class="card-item">
            <div class="card-user">
                <i class="fa-solid fa-circle-user"></i>
                <span class="card-name">${entry.name}</span>
            </div>
            <p>${entry.message}</p>
        </li>`
    }

    messageList.innerHTML = html;
}

//menangkap submit form
form.addEventListener("submit", function(event) {
    event.preventDefault();

    //menyimpan value ke variable
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    //mencegah data kosong
    if(name === "" || message === "") {
        alert("Nama dan Pesan wajib diisi.");
        return;
    }

    //menambahkan data baru di urutan paling atas, lalu tampilkan
    guestbook.unshift({name:name, message:message});
    renderGuestBook();

    //mengosongkan input
    nameInput.value = "";
    messageInput.value = "";
    nameInput.focus();
})


renderGuestBook();