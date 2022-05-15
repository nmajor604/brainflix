import avatar from '../assets/images/Mohan-muruge.jpg';
import './CommentsList.scss';

function CommentsList (props) {
    // function timeConverter(UNIX_timestamp){
    //     var a = new Date(UNIX_timestamp * 1000);
    //     var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    //     var year = a.getFullYear();
    //     var month = months[a.getMonth()];
    //     var date = a.getDate();
    //     var hour = a.getHours();
    //     var min = a.getMinutes();
    //     var sec = a.getSeconds();
    //     var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    //     return time;
    //   }
    //   console.log(timeConverter(0));

    function convertTimestamp(){
        const formattedDate = new Date(props.comments.timestamp);
        const Day = formattedDate.getDate();
        const Month = formattedDate.getMonth();
        const Year = formattedDate.getFullYear();
        const dateString = (Day + 1) + '/' + (Month + 1) + '/' + Year;
        return formattedDate;
    }
    console.log(convertTimestamp(props.comments.timestamp));



    
    return (
        <div>
            {props.comments.map((comment, index) => <div key={index}>
                 <div className='comments__list'>
                    <img className='comments__avatar' src={avatar} alt="User Avatar"/>
                    <div>
                        <div className='comments__title'>
                            <div>{comment.name}</div>  
                            {/* <div>{dateString}</div> */}
                        </div>
                        <p>{comment.comment}</p>
                    </div>
                 </div>
                </div>)}
        </div>
        );
    }
  

  export default CommentsList;