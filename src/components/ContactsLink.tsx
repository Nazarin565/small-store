import { Link, Typography } from "@mui/material";

type Props = {
  href: string;
  Icon: React.ElementType;
  text: string;
  target?: string;
};

export const ContactsLink: React.FC<Props> = ({
  href,
  Icon,
  text,
  target = "_self",
}) => {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener" : ""}
      display="flex"
      gap="30px"
      alignItems="center"
      color="#FFF"
      underline="hover"
    >
      <Icon fontSize="large" sx={{ color: "#FFD012" }} />
      <Typography>{text}</Typography>
    </Link>
  );
};
