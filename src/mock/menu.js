export const menuData = [
    {
        path: "/",
        name: "home",
        label: "首页",
        icon: "HomeFilled",
        url: "Home/Home",
    },
    // {
    //     path: "/mall",
    //     name: "mall",
    //     label: "商品管理",
    //     icon: "video-play",
    //     url: "MallManage/MallManage",
    // },
    {
        path: "/user",
        name: "user",
        label: "用户管理",
        icon: "user",
        url: "UserManage/UserManage",
    },
    {
        label: "其他",
        icon: "location",
        children: [
            {
                path: "/page1",
                name: "page1",
                label: "page1",
                icon: "setting",
                url: "Other/PageOne",
            },
            {
                path: "/page2",
                name: "page2",
                label: "page2",
                icon: "setting",
                url: "Other/PageTwo",
            },
        ],
    }
]