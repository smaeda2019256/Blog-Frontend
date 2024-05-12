import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';


const PostCard = () => {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }

                title="Title"
                subheader="Subtitle"

            />
            <Link to={''}>

                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt="Paella dish"
                />
            </Link>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {/* {content} */}

                    {/*<Box component='span' dangerouslySetInnerHTML={{ __html: content.split(" ").slice(0, 10).join(" ") + "..." }}></Box>*/}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, vero ipsam quibusdam ducimus recusandae totam nostrum eius similique iure repudiandae eligendi, quidem alias itaque possimus consectetur nam modi voluptatibus accusamus!
                </Typography>
            </CardContent>
            <CardActions >
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon sx={{ color: 'red' }} />
                         </IconButton>

                        2 Like(s)
                    </Box>
                    <Box>
                        3
                        <IconButton aria-label="comment">
                            <CommentIcon />
                        </IconButton>
                    </Box>
                </Box>

            </CardActions>

        </Card>
    );
}


export default PostCard;