package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.Model.Register;
import com.example.demo.Service.RegisterService;

@RestController
@RequestMapping("/users")
public class RegisterController {
    @Autowired
    private RegisterService registerService;

    @PostMapping("/add")
    public Register addUser(@RequestBody Register register) {
        return registerService.addUser(register);
    }

}


