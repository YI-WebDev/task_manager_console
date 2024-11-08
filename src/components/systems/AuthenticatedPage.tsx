import { Box } from "@mui/material";

type AuthenticatedPageProps = {
  children: React.ReactNode;
};

export default function AuthenticatedPage({
  children,
}: AuthenticatedPageProps) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {children}
      </Box>
    </Box>
  );
}
