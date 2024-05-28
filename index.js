import { tweetsData } from './data.js'

const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')


tweetBtn.addEventListener('click', function(){
    console.log(tweetInput.value)
})
document.addEventListener('click', function(e){
    if(e.target.dataset.like){
        console.log(e.target.dataset.like)
    }
   
})
function getFeed(){
    let feedHTML = ``
    tweetsData.forEach(function(tweet){
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
                <i class="fa-solid fa-heart" data-like="${tweet.uuid}"></i>
                   ${tweet.likes}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-retweet" data-retweet='${tweet.uuid}'></i>
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