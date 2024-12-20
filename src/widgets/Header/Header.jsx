// widgets/Header/Header.jsx
import { Box, Link } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';

function Header() {
    const routes = [
        { path: '/', label: 'Lab1' },
        { path: '/lab2', label: 'Lab2' },
        { path: '/lab3', label: 'Lab3' },
        { path: '/lab4', label: 'Lab4' },
        { path: '/lab5', label: 'Lab5' }
    ];

    return (
        <Box as="nav" bg="blue.500" color="white" p={8} display="flex" gap={6} listStyleType="none">
            {routes.map((route, index) => (
                <Box as="li" key={index} listStyleType="none">
                    <Link
                        as={NavLink}
                        to={route.path}
                        _hover={{ color: "blue.200" }}
                    >
                        {route.label}
                    </Link>
                </Box>
            ))}
        </Box>
    );
}

export default Header;
