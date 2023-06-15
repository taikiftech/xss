package com.example.xss.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class XssController {
    @GetMapping("/xss_lv1")
    public String XssLv1(){
        return "xss_lv1";
    }

    @GetMapping("/xss_lv2")
    public String XssLv2(){
        return "xss_lv2";
    }
}
