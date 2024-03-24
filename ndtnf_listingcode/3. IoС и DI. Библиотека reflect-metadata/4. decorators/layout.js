const withLayout = function (render) {
    return function (...args) {
        const content = render(...args);
        return `
            <header>Верхняя часть сайта</header>
            <main>${content}</main>
            <footer>Нижняя часть сайта</footer>
        `;
    }
};

const Contacts = function (phone, email) {
    return `
        <address>Email: ${email}, Phone: ${phone}</address> 
    `;
};

const ContactsPage = withLayout(Contacts);

const user1ContactsPage = ContactsPage('+79091231232', 'tests@user.com');
const user2ContactsPage = ContactsPage('+79111231232', 'tests@user2.com');