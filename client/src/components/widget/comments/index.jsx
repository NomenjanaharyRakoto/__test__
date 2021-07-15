import AddComments from "./add"
import Gravatar from 'react-gravatar'

const Comments = ({ comments, loader, props }) => {

    return (
        <>
            <div className="project-info-box">
                <p style={{ marginBottom: 10 }}><b>Commentaires</b></p>
                {
                    !loader && comments.length > 0 ?
                        comments.map((comment, key) => (
                                <p key={key }>
                                <b>
                                  
                                        <Gravatar
                                            
                                            email={comment.owner.email}
                                             size={150}
                                        />
                                   
                                </b>
                                <b> { comment.owner.username}</b>  :  {comment.body}
                                </p>
                        ))
                        :
                      <p>Pas encore de commentaire por cette voiture</p>
                }
                {props.is_authenticated ?
                    <AddComments
                    animation={true}
                    props={props}
                />:null}
               
            </div>
        </>
        )
}



export default Comments