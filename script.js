function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Ramirez;Ilaes;Mariana;;
FN:Ilaes Marina Ramirez
TEL:+57 3164781922
EMAIL;TYPE=WORK: ventascerdo@cervalle.com 
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
