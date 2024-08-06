package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Register;
import com.example.demo.Repository.RegisterRepository;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepository registerRepository;

    public Register save(Register register) {
        return registerRepository.save(register);
    }

    public Register getByEmail(String email) {
        return registerRepository.findByEmail(email);
    }

    public void delete(Long id) {
        registerRepository.deleteById(id);
    }

    public Register update(Long id, Register register) {
        if (registerRepository.existsById(id)) {
            register.setId(id);
            return registerRepository.save(register);
        } else {
            throw new RuntimeException("Register not found with id " + id);
        }
    }
}
