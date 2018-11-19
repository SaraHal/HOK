import organizations from './organizations.actions'
import customers from './customers.actions'
import projects from './projects.actions'
import programs from './programs.actions'

export default {
    ...organizations,
    ...customers,
    ...projects,
    ...programs
}
