import React, {useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'

import NewsCard from './components/newscard/NewsCard'
import useStyles from './styles.js'



const alanKey = 'dc93801ca30f38512b4fd359e3e98fc22e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {
  const [newsArticles, setnewsArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles()

  useEffect(() => {
    alanBtn({
      key: alanKey, 
      onCommand: ({command, articles}) => {
        if(command === 'newsHeadlines'){
          setnewsArticles(articles)
        }else if(command === 'highlight'){
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)
        }
      }
    })
  }, [])





  return(
    <div>
      <div className={classes.logoContainer}>
        <img src="https://i.pinimg.com/originals/6e/5a/e5/6e5ae5a153d13b789b170c0edf9fc1d8.png" className={classes.logo} alt="logo" />
      </div>
      <NewsCard articles={newsArticles} activeArticle={activeArticle} />
    </div>
  )
}

export default App;

