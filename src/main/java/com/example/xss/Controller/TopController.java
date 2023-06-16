package com.example.xss.Controller;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class TopController {
    
    @GetMapping("/")
    public String TopGet(HttpServletResponse resp){
        Cookie cokkie = new Cookie("flag","{Y0u_4re_h4cker_righ7?}");
        cokkie.setMaxAge(3600);
        resp.addCookie(cokkie);
        return "top";
    }

    @PostMapping("/")
    public String TopPost(){
        return "top";
    }

    //@GetMapping()

}
