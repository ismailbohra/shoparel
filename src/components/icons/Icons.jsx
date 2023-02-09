import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";
import ModeIcon from "@mui/icons-material/Mode";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";

export const Icon = (props) => {
  switch (props.icon) {
    case "HomeIcon":
      return <HomeIcon {...props} />;
    case "PersonIcon":
      return <PersonIcon {...props} />;
    case "BookIcon":
      return <BookIcon {...props} />;
    case "Pencil":
      return <ModeIcon {...props} />;
    case "PersonAddIcon":
      return <PersonAddAlt1Icon {...props} />;
    case "file":
      return <InsertDriveFileIcon {...props} />;
    case "OpenBookIcon":
      return <AutoStoriesIcon {...props} />;
    case "Bookmark":
      return <BookmarkIcon {...props} />;
    case "Done":
      return <LibraryAddCheckIcon {...props} />;
    case "FolderCopyIcon":
      return <FolderCopyIcon {...props} />;
    default:
      return null;
  }
};
