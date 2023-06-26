package com.example.xss.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class XssController {
    @GetMapping("/xss_lv1")
    public String XssLv1(HttpServletResponse resp){
        Cookie cokkie = new Cookie("flag","{Y0u_4re_7he_SUPER_HACKER!!!!}");
        cokkie.setMaxAge(3600);
        resp.addCookie(cokkie);
        return "xss_lv1";
    }

    @GetMapping("/xss_lv2")
    public String XssLv2(HttpServletResponse resp){
        Cookie cokkie = new Cookie("flag","{Y0u_4re_1ncreadible?!?!?!?!?!}");
        cokkie.setMaxAge(3600);
        resp.addCookie(cokkie);
        return "xss_lv2";
    }

    @GetMapping("/xss_lv3")
    public String XssLv3(HttpServletResponse resp){
        Cookie cokkie = new Cookie("flag","{Y0u_4re_Swee7!!?!?!?!?I_lov3_1t!!!}");
        cokkie.setMaxAge(3600);
        resp.addCookie(cokkie);
        return "xss_lv3";
    }
}
