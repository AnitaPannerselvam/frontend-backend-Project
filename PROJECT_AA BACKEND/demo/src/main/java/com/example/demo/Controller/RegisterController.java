package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Model.Register;
import com.example.demo.Service.RegisterService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/register")
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @PostMapping
    public ResponseEntity<Register> create(@Valid @RequestBody Register register) {
        Register savedRegister = registerService.save(register);
        return new ResponseEntity<>(savedRegister, HttpStatus.CREATED);
    }

    @GetMapping("/{email}")
    public ResponseEntity<Register> getByEmail(@PathVariable String email) {
        Register register = registerService.getByEmail(email);
        return register != null ? 
            new ResponseEntity<>(register, HttpStatus.OK) :
            new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Register> update(@PathVariable Long id, @Valid @RequestBody Register register) {
        try {
            Register updatedRegister = registerService.update(id, register);
            return new ResponseEntity<>(updatedRegister, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        registerService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
