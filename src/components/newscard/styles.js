import {makeStyles} from '@material-ui/core/styles'

export default makeStyles({
    container: {
        padding: '0 5%',
        width: '100%',
        margin: 0
    },
    card: {
        flexDirection: 'colimn',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20vh',
        padding: '10%',
        borderRadius: 10,
        color: '#fff'
    },
    infoCard: {
        flexDirection: 'column',
        textAlign: 'center'
    }
})

