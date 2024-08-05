package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Model.Register;
import com.example.demo.Repository.RegisterRepo;

@Service
public class RegisterService {
    @Autowired
    private RegisterRepo registerRepo;

    public Register addUser(Register register) {
        return registerRepo.save(register);
    }
}

