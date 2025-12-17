export const UserDetails =({name,isOnline, hideOffline,isPremium,isNewUser, role}) => {
   if(hideOffline && !isOnline){
    return null;
   }
   let roleBadge = null;
   if(role === 'admin'){
     roleBadge = <span> Admin </span>
   }else if(role === 'moderator'){
     roleBadge = <span> Moderator </span>
   } else if(role === 'vip'){
        roleBadge = <span> VIP </span>
   }

   // conditional rendering using ternary operator
   return (
    <div>
            <h3>{name}
            {isPremium && <span>⭐</span>}
            {isNewUser && <span>🆕</span>}
            {roleBadge}
            </h3>
            <span>{isOnline ? 'Online' : 'Offline'}</span>
            <p>{isOnline ? "Available for char":"Not available"}</p>
            {isOnline ? <button>Send Message</button> : <small>Check back later</small>}
    </div>
   )

   // if render statement example
   if(isOnline){
    return (
        <div>
            <h3>{name}</h3>
            <span>Online</span>
            <p>Availabe for chat</p>
            <button>Send Message</button>
        </div>
    );
   }

   return (
    <div>
        <h3>{name}</h3>
        <span>Offline</span>
        <p>Not Availabe</p>
        <small>Check back later</small>
    </div>

   )

}