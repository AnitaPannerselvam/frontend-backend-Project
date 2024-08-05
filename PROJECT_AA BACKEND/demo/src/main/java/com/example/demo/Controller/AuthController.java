// package com.example.demo.Controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;
// import com.example.demo.Service.AuthService;
// import com.example.demo.DTO.LoginRequest;

// @RestController
// @RequestMapping("/auth")
// public class AuthController {
//     @Autowired
//     private AuthService authService;

//     @PostMapping("/login")
//     public String login(@RequestBody LoginRequest loginRequest) {
//         return authService.login(loginRequest);
//     }
//     @PostMapping("/logout")
//     public String logout() {
//         return authService.logout();
//     }
// }


package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.Service.AuthService;
import com.example.demo.DTO.LoginRequest;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        return authService.login(loginRequest);
    }

    @PostMapping("/logout")
    public String logout() {
        return authService.logout();
    }
}

