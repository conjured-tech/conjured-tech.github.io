import { extendTheme } from "@chakra-ui/react"

export default extendTheme({
  colors: {
    brand: {
      100: "gray",
      200: "darkgray", 
      300: "#358435", //green
      400: "darkgreen", //blue
      500: "#050304", //black
      600: "#C2FCFF",
      700: "#C2FCFF",
      800: "#C2FCFF",
      900: "#C2FCFF",
    },
    gray: {
      50: '#f7fafc',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: 'brand.500',
      800: '#1A202C',
      900: '#171923',
    }
  },
  radii: {
    none: '0',
    sm: '0',
    base: '0',
    md: '0',
    lg: '0.3rem',
    xl: '0.4rem',
    '2xl': '6rem',
    '3xl': '8rem',
    full: '9999px',
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    mono: "monospace",
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'brand.500',
      },
    }
  },
  components: {
    Heading: {
      baseStyle: {
        lineHeight: 'none'
      }
    },
    Button: {
      baseStyle: {
      },
      sizes: {
      }
    },
    MenuList: {
      baseStyle: {
        borderRadius: "0"
      }
    }
  }
})