function loadComponents(client) {
    const fs = require('fs');
    client.handleComponents = async () => {
        const componentsFolders = readdirSync('./components')
        for (const folder of componentsFolders) {
            const componentFile = readdirSync(`./components/${folder}`).filter(
                (file) => file.endsWith('.js')
            );

            const { buttons, selectMenus } = client

            switch (folder) {
                case 'buttons':
                    for (const file of componentFiles) {
                        const buttons = require(`./components/${folder}/${file}`)
                        buttons.set(button.data.name, button)
                    }
                    break;

                case 'selectMenus':
                    for (const file of componentFile) {
                        const menu = require(`../../components/${folder}/${file}`)
                        selectMenus.set(menu.data.name, menu)
                    }
                    break

                default:
                    break
            }
        }
    }
}

module.exports = {loadComponents};