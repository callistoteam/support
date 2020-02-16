import config from '../config'

export default () => `https://raw.githubusercontent.com/${config.repository.author}/${config.repository.name}/${config.repository.branch}/`
