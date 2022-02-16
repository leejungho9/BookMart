export default function Footer() {

    const data = new Date();
    const year = data.getFullYear();
    return (
    <footer>
        <p>© {year} Jungho Lee. All rights reserved.</p>
    </footer>
    )
}