import { Product, Article, Workshop, UserTree, Order } from './types';

export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ6iaTIPWq8Frtrc-oJtO_kImv1mMvOBiUREM5TNYOqnguQwv3J4jdxpUKlZjOjY0t6Yvn_YX1sF-m7lI5XhVL81Mfr3cjg0cf20JAnw76MhrkLa6lFJcqacv4uOGDWDRoeiLzluaK4iisPVOk6946JVlSszdsGnUZraUJLUZ-89oayREBCLaw19RPbVPI6vhHhpN0T5ySPa5tbKZNspJ1-sjuIpoPFXi3GsCKHIsCrBMNk4_g-hrXj_m-g1VcK8IDxGd1IG__MugX";

export const CATEGORIES = [
  {
    title: "Indoor Bonsai",
    subtitle: "Perfect for home & office",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIF5q4pLQQDh7wXFq6NDwkBXeiSZIeFwZWCc2WFf7a0pMwXXuSntEGx-FV4OFyeEYywvxsAJDYwik-dYirylLUpMm8jhqAn3WaXj_xsXzhiDwj9eL5OCgs8e1-G5WJZP87URGjZ8L_NrEICPclxNDC23uhMWvlsVgUGjxP0vZhufDXdNdtmFI7UdwfcylVPogXYJlg0r6aSTZ_Uvakyd4RzkcKt4a6YdITXNv2jjHaLeo3fZ-LmtWoWbLQy3Zs0tljVycidEcsubu3",
    link: "/shop"
  },
  {
    title: "Outdoor Specimens",
    subtitle: "Garden grandeur",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHGxpJGGs00-XcWwzv2I2zK06xK4VWi_1URSRGioDB5D6rlX_cnN3ZyngyeeHmue4TdTvO5izr0gDPLQ_IMJKOnMwlz_GpzdlxvJHcOSL7S31t3GgMgsHNU7bcpPt2iuCS0_O2sgKrcrT4LQw3srL5GkXhFa22NrSFIOpuYrNQnsbBIRfrJ699CZ5Skxks9vC9Ic5n1tUyPuQK0hIMd_tqH5LnIKV5CwtoITV9g_o5sZ-dN_qGFrf_xZALkNc3CBRda_iHgLBRibbK",
    link: "/shop"
  },
  {
    title: "Artisan Pots",
    subtitle: "Handcrafted vessels",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwFBMLeoRX8w9ZffOfyXdbS-ORU6Pu0wnO3c_DBgzQDm0Qp6ef9qeLpqYHbt-ajWloBAhy7deLUkDiQ7PJOaekji9OZTjIu8qc32LYXZof6Y9wAShDyn9IJ6vfuDlEb-4mwMHMILObGYe_EbkQdEVV58x4avVT7ZKwDBJNKOWNchLTymgyBvRoIrlARpjb6Uz--g_tjQmzsggw5XmQTP_WyLhO4wseO3zQ7eiwThoOqrmgMhqTRONCby_s_bAI1l5KDgKQNRTomEp7",
    link: "/shop"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Imperial Black Pine",
    latinName: "Pinus thunbergii",
    price: 450.00,
    age: 25,
    category: "outdoor",
    isBestSeller: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHGxpJGGs00-XcWwzv2I2zK06xK4VWi_1URSRGioDB5D6rlX_cnN3ZyngyeeHmue4TdTvO5izr0gDPLQ_IMJKOnMwlz_GpzdlxvJHcOSL7S31t3GgMgsHNU7bcpPt2iuCS0_O2sgKrcrT4LQw3srL5GkXhFa22NrSFIOpuYrNQnsbBIRfrJ699CZ5Skxks9vC9Ic5n1tUyPuQK0hIMd_tqH5LnIKV5CwtoITV9g_o5sZ-dN_qGFrf_xZALkNc3CBRda_iHgLBRibbK"
  },
  {
    id: "p2",
    name: "Mountain Maple",
    latinName: "Acer palmatum",
    price: 320.00,
    age: 18,
    category: "outdoor",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDha6uzxeXtkwMlN8JAoYZ_scemNzykhhwiBEdPuC7aURMr99lFVQpfJZx6ZZXelusHS-CZrq2V1s57bt4Jbs7v9Q3uWndqDxb-E5gfD_980jyykvC-cYfQ-zmrISJAztnYHXISBqSvpGaU3k7dsVz0h6mA194UdrQs80gn3fmuTlIEk4q5XruXt0Ta6Wm9ZxGmKK5a5c1OrbyZ3P8NRQgMzXqvOIa185EZkI5RFSoVx37LWGpo9bd98AoDd3rXFBfoaxd06Ow8oEOv"
  },
  {
    id: "p3",
    name: "Chinese Elm Cascade",
    latinName: "Ulmus parvifolia",
    price: 195.00,
    age: 15,
    category: "indoor",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGyPunEa_77X9fXDqKCxLxKZXgn96Xsb9NpMzbnrd8ecCXGPrFBCMRbVcXMAsY8w8xs9VKnsrb_OyvaWr7ZC338XtKbmOqMwaCqT8BuKvoFIbgICX6Bje_6aHtz0D4MoY3myaOkztckBRIQXAX6fihoRZcbsBWeEVAMGeTmIa8FVEVI61uxCmh7URhTN8pgUuYQ135qO9ugJ7gd8PAWn9C-_Y8H8g5uAw34CU1NI9chdfTuyubu4klkj9MOzfzBlL5z-Jp5bqEl2Kn"
  },
  {
    id: "p4",
    name: "Juniper Low-Rise",
    latinName: "Juniperus procumbens",
    price: 145.00,
    age: 12,
    category: "outdoor",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQRgTnz7cB4kCg1VP4GqFToCGUQywxc2LZsKAudCskYnCgaYZPbMSrKVlfwCeoGEREVYeSB0fhEV4kIFX-c7ccxLZgIdo59LgkxB7niL486vXnZgM9CHnx8gCK0hfuk37KcFArm7TAyz_BGsD-uTtxkH9oyqIVTrZ4LaxHz7a1N8gp9wxxeDsZYb2PJ9rCk_7dnaalHDA4EEhDeP5PUT5FpqIZ7URImbEyOvfVFbwfcj8v6eoqWvUq8toaKYnWRJx1HVRGbCg76Ul3"
  },
  {
    id: "p5",
    name: "Ginseng Ficus Root",
    latinName: "Ficus microcarpa",
    price: 85.00,
    originalPrice: 110.00,
    age: 8,
    category: "indoor",
    isSale: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKj_pLc18hu05arNLOs4ijQRBkaV3a2JTvL83zTTm3SdoUgjPYFLO8Xct1Yjn2CiaN4uddJx-tGRXenQCEUtUc4GLLRNvFkiZ-m1M2Jwg0XMd-qvK5Cc4LlllpTTInSMQIVkVJWzBy-uMII7a6lmhlSY4NhEI1Preb-uhVH3RzO6OUqS-5rw-a4lszWWamfZK9VUc3KmOotmbRTwz28BuSTtgLBrFoLyIyIFCJMKU6tM8YS2KkW9to87QJj59Dk7U0obb1fGuLlOcx"
  },
  {
    id: "p6",
    name: "Forest Starter Kit",
    latinName: "Mixed Varieties",
    price: 65.00,
    age: 6,
    category: "outdoor",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ6iaTIPWq8Frtrc-oJtO_kImv1mMvOBiUREM5TNYOqnguQwv3J4jdxpUKlZjOjY0t6Yvn_YX1sF-m7lI5XhVL81Mfr3cjg0cf20JAnw76MhrkLa6lFJcqacv4uOGDWDRoeiLzluaK4iisPVOk6946JVlSszdsGnUZraUJLUZ-89oayREBCLaw19RPbVPI6vhHhpN0T5ySPa5tbKZNspJ1-sjuIpoPFXi3GsCKHIsCrBMNk4_g-hrXj_m-g1VcK8IDxGd1IG__MugX"
  },
  {
    id: "p7",
    name: "Ceramic Pot Set",
    latinName: "Tokoname Style",
    price: 85.00,
    category: "pot",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMnc_Uou47CuoAAsMr81zXxKOXKi6r95MTX-iIqTHLWkn49OkaeyvtjxSKQoh1zzpZiXovoW5JjtvqLDzw1kFCqALFNVD0qrwwZRo_B5m1_m_OkwVypiIy5eCAKs8938BN1LjFTytbJOUIUhym_0P9pqyEQPJgcvzpoIdIyfbsuf9ssTGV7-TxO3kr258UGVgYJuedZiCrcLufifq0xehOcfi-A-sJrsa5U9ROguGksAAKHsdDv2tw8pH8wCUIykLzsO5k7L1HpEZW"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "a1",
    title: "The Art of Pruning",
    category: "Technique",
    description: "Learn how to shape your tree's future by understanding growth patterns and seasonal cutting techniques.",
    readTime: "15 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZlLS8gzx9LsV1cKQyfLgiIVRsyT4cKSbUMh5obGNZyIsQqzbcfv5XEAPoGHpnvda7-PhTrIhWtp0u0TqiOVp7pVGiuqxL9isjU3lGruvGeJK3OUSyBPhBA19GkyDbHjkJ8mf74tHAaQmkZ6R1HUuLwffhun1QlQEcWTCnAio3G6lOrul6aPDhvlH-mwsjWunmZFUoy2bV_zXJQOt73IXwbUtHHH-opdLx34oOXhANSEB92RuHYdlNerueifJhTfvvnjE1_xIkiEcX"
  },
  {
    id: "a2",
    title: "Watering Basics",
    category: "Maintenance",
    description: "The most common mistake beginners make is overwatering. Here is how to check your soil moisture correctly.",
    readTime: "5 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaP_W5aTsguuzjTOMOazsOo0DOyOgqNlpMAyehXaZpbLFmMh5G8jp6Qy2cDuNOEIoUIGALv-4A03KNpCF9qMBX_bdnxsojepVQvEsqpktWFplbGpx4ss5GM4W2876UfkWtQAngN3VQDeu9kP197Vb7I-z4fhkGLLIojjm_WIjcIUeFUjvnnct_x7BEssk7_z9fn-osFK12sPweWSbsSikSP6rVEJvzqQvjTVP8q3ir2Bnm8LX7h8Ue4AyU0GFQO7W3yPdBlawbyA3J",
    views: "4.1k views"
  },
  {
    id: "a3",
    title: "Choosing Your Pot",
    category: "Aesthetics",
    description: "The pot is the frame for your living art. Discover how color, shape, and depth influence the overall harmony.",
    readTime: "8 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwFBMLeoRX8w9ZffOfyXdbS-ORU6Pu0wnO3c_DBgzQDm0Qp6ef9qeLpqYHbt-ajWloBAhy7deLUkDiQ7PJOaekji9OZTjIu8qc32LYXZof6Y9wAShDyn9IJ6vfuDlEb-4mwMHMILObGYe_EbkQdEVV58x4avVT7ZKwDBJNKOWNchLTymgyBvRoIrlARpjb6Uz--g_tjQmzsggw5XmQTP_WyLhO4wseO3zQ7eiwThoOqrmgMhqTRONCby_s_bAI1l5KDgKQNRTomEp7"
  }
];

export const WORKSHOPS: Workshop[] = [
  {
    id: "w1",
    title: "Introduction to Bonsai",
    date: "Nov 12",
    time: "2:00 PM",
    price: 85.00,
    level: "Beginner",
    description: "The perfect starting point. Learn the history of bonsai, basic physiology, and pot your very first Juniper tree to take home.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIF5q4pLQQDh7wXFq6NDwkBXeiSZIeFwZWCc2WFf7a0pMwXXuSntEGx-FV4OFyeEYywvxsAJDYwik-dYirylLUpMm8jhqAn3WaXj_xsXzhiDwj9eL5OCgs8e1-G5WJZP87URGjZ8L_NrEICPclxNDC23uhMWvlsVgUGjxP0vZhufDXdNdtmFI7UdwfcylVPogXYJlg0r6aSTZ_Uvakyd4RzkcKt4a6YdITXNv2jjHaLeo3fZ-LmtWoWbLQy3Zs0tljVycidEcsubu3"
  },
  {
    id: "w2",
    title: "Structural Pruning",
    date: "Nov 18",
    time: "10:00 AM",
    price: 120.00,
    level: "Intermediate",
    description: "Understand the aesthetics of negative space. We focus on decisiveness in branch selection to create compelling tree structures.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZlLS8gzx9LsV1cKQyfLgiIVRsyT4cKSbUMh5obGNZyIsQqzbcfv5XEAPoGHpnvda7-PhTrIhWtp0u0TqiOVp7pVGiuqxL9isjU3lGruvGeJK3OUSyBPhBA19GkyDbHjkJ8mf74tHAaQmkZ6R1HUuLwffhun1QlQEcWTCnAio3G6lOrul6aPDhvlH-mwsjWunmZFUoy2bV_zXJQOt73IXwbUtHHH-opdLx34oOXhANSEB92RuHYdlNerueifJhTfvvnjE1_xIkiEcX"
  },
  {
    id: "w3",
    title: "Maple Refinement",
    date: "Dec 05",
    time: "9:00 AM",
    price: 165.00,
    level: "Advanced",
    description: "A focused session on Acer Palmatum. Techniques include leaf reduction, ramification, and winter protection strategies.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDha6uzxeXtkwMlN8JAoYZ_scemNzykhhwiBEdPuC7aURMr99lFVQpfJZx6ZZXelusHS-CZrq2V1s57bt4Jbs7v9Q3uWndqDxb-E5gfD_980jyykvC-cYfQ-zmrISJAztnYHXISBqSvpGaU3k7dsVz0h6mA194UdrQs80gn3fmuTlIEk4q5XruXt0Ta6Wm9ZxGmKK5a5c1OrbyZ3P8NRQgMzXqvOIa185EZkI5RFSoVx37LWGpo9bd98AoDd3rXFBfoaxd06Ow8oEOv"
  }
];

export const USER_TREES: UserTree[] = [
  {
    id: "ut1",
    name: "Juniper Procumbens",
    species: "Juniperus chinensis",
    acquired: "Dec 2023",
    health: "Good",
    lastWatered: "4 days ago",
    status: "Thirsty",
    moistureLevel: 20,
    image: PRODUCTS[3].image
  },
  {
    id: "ut2",
    name: "Ginseng Ficus",
    species: "Ficus microcarpa",
    acquired: "Jan 2024",
    health: "Thriving",
    lastWatered: "Yesterday",
    status: "OK",
    moistureLevel: 85,
    image: PRODUCTS[4].image
  },
  {
    id: "ut3",
    name: "Japanese Maple",
    species: "Acer palmatum",
    acquired: "Aug 2023",
    health: "Good", // actually dormant in logic but simplified
    lastWatered: "2 days ago",
    status: "OK",
    moistureLevel: 60,
    image: PRODUCTS[1].image
  }
];

export const USER_ORDERS: Order[] = [
  { id: "#ORD-2941", date: "Oct 24, 2024", total: 145.00, status: "Delivered", items: ["Juniper Procumbens"] },
  { id: "#ORD-3005", date: "Oct 28, 2024", total: 35.00, status: "In Transit", items: ["Soil Mix"] },
  { id: "#ORD-2810", date: "Sep 15, 2024", total: 320.00, status: "Delivered", items: ["Japanese Maple"] },
];