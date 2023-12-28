import './user-card.css'

export default function UserCard (props) {
    return (
        <div className="user">
            <img 
                src={props.profileLink} 
                alt="Profile" 
                width="50" 
                height="50" 
            />
            <a 
                href={props.accountLink} 
                target="_blank"
            > {props.username} </a>
            hi from user card ...
        </div>
    )
}