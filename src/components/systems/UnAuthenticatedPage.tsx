import { Box, Container } from "@mui/material";

type UnAuthenticatedPage = {
  children: React.ReactNode;
};

export default function UnAuthenticatedPage({ children }: UnAuthenticatedPage) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "grey.100" }}>
      <Container maxWidth="sm" sx={{ my: 8 }}>
        {children}
      </Container>
    </Box>
  );
}
