var listaFilmes = [
  "https://s2.glbimg.com/ZW5j93aHAzJKKTVCTOAKJ_HGCHM=/0x0:1400x1454/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/z/u/1kVPoBTVKa2O3jtRUD7A/spacejam-cartaz.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/0/0d/7._Ko%C4%9Fu%C5%9Ftaki_Mucize.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/86/96/34/20028591.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}