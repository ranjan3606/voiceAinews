import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    position:'fixed',
    left: 0,
    bottom: 0,
    color: '#000',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120px',
    [theme.breakpoints.down('sm')]:{
      display: 'none'
    },
  },
  link:{
    textDecoration: 'none',
    color: 'rgba(21, 101, 192)'
  },
  image: {
    marginLeft:20
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '3%',
    borderRadius: 10,
    color: '#fff',
    backgroundColor: 'rgba(21, 101, 192)',
    margin: '0 12px',
    textAlign: 'center',
    height: '25vmin',
    [theme.breakpoints.down('sm')]:{
      flexDirection: 'column',
      width: '100%',
      textAlign: 'center',
      height: 'initial',
      '&:nth-of-type(1)':{
        marginBottom: '12px'
      }
    }
  },
  infoContainer: {
    display:'flex',
    alignItems: 'center',
    wdith: '100%',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]:{
      flexDirection: 'column',
      textAlign: 'center'
    }
  },
  logoContainer: {
    padding: '0 5%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    // width: '100%',
    [theme.breakpoints.down('sm')]:{
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  logo:{
    height: '27vmin',
    borderRadius: '15%',
    padding: '0 5%',
    margin: '3% 0',
    [theme.breakpoints.down('sm')]:{
      height: '35vmin'
    }
  },
}))