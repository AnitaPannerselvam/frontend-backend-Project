package com.example.demo.Service;

import com.example.demo.Model.Login;
import com.example.demo.Repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public Login authenticate(String email, String password) {
        Login login = loginRepository.findByEmail(email);
        if (login != null && login.getPassword().equals(password)) {
            return login;
        }
        return null; // or throw an exception
    }

    public Optional<Login> getLoginById(Long id) {
        return loginRepository.findById(id);
    }

    public Login createLogin(Login login) {
        return loginRepository.save(login);
    }

    public Login updateLogin(Long id, Login loginDetails) {
        if (loginRepository.existsById(id)) {
            loginDetails.setId(id);
            return loginRepository.save(loginDetails);
        } else {
            return null;
        }
    }

    public void deleteLogin(Long id) {
        loginRepository.deleteById(id);
    }
}
