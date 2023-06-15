package com.example.xss.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TopController {
    
    @GetMapping("/")
    public String Top(){
        return "top";
    }
}
