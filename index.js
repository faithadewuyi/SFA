import { tweetsData } from './data.js'

const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')


tweetBtn.addEventListener('click', function(){
    console.log(tweetInput.value)
})
document.addEventListener('click', function(e){
    if(e.target.dataset.like){
       handleLikeClick(e.target.dataset.like)
    }
    else if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }
   
})

function handleLikeClick(tweetId){
    
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if(targetTweetObj.isLiked){
        targetTweetObj.likes--
       
    }
    else{
        targetTweetObj.likes++
      
    }
   targetTweetObj.isLiked =!targetTweetObj.isLiked
    render()
  
}

function handleRetweetClick(tweetId){
    const tweetsObjData = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    if(tweetsObjData.isRetweeted){
        tweetsObjData.retweets--
    }
    else{
        tweetsObjData.retweets++
    }
    tweetsObjData.isRetweeted = !tweetsObjData.isRetweeted
    render()
}
function getFeed(){
    let feedHTML = ``
    tweetsData.forEach(function(tweet){
        let likeIconClass =''
        
         if (tweet.isLiked){
                likeIconClass ='liked'
         }
         let reweetIconClass =''

          if(tweet.isRetweeted){
            reweetIconClass = 'retweeted'
         }

         if(tweet.replies.length > 0)
            {
                
            }

        feedHTML += `
        <div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                <i class="fa-solid fa-comment-dots" data-replies='${tweet.uuid}'></i>
                  ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-heart ${likeIconClass}" data-like="${tweet.uuid}"></i>
                   ${tweet.likes}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-retweet ${reweetIconClass}" data-retweet='${tweet.uuid}'></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>
        `
    })
          
       return feedHTML
    }

function render(){
    document.getElementById('feed').innerHTML = getFeed()
}
render ()