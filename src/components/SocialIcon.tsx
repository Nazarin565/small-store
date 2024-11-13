import { Link } from "@mui/material";

type Props = {
  href: string;
  Icon: React.ElementType;
};

export const SocialIcon: React.FC<Props> = ({ href, Icon }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener"
      color="#FFF"
      underline="none"
      width="30px"
      height="30px"
      bgcolor="#FFD012"
      borderRadius="30px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Icon />
    </Link>
  );
};
