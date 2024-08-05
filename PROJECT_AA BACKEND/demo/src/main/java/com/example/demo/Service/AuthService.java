// package com.example.demo.Service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.demo.Model.Register;

// import com.example.demo.Repository.RegisterRepo;
// import com.example.demo.DTO.LoginRequest;

// @Service
// public class AuthService {
//     @Autowired
//     private RegisterRepo userRepo;

//     public String login(LoginRequest loginRequest) {
//         Register user = userRepo.findByEmail(loginRequest.getEmail());
//         if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
//             return "Login successful";
//         }
//         return "Invalid email or password";
//     }
//     public String logout() {
//         // Simulate logout logic
//         return "Logout successful";
//     }
// }
package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Register;
import com.example.demo.Repository.RegisterRepo;
import com.example.demo.DTO.LoginRequest;

import java.util.List;

@Service
public class AuthService {
    @Autowired
    private RegisterRepo userRepo;

    public String login(LoginRequest loginRequest) {
        List<Register> users = userRepo.findByEmail(loginRequest.getEmail());
        if (users.size() == 1) {
            Register user = users.get(0);
            if (user.getPassword().equals(loginRequest.getPassword())) {
                return "Login successful";
            } else {
                return "Invalid email or password";
            }
        } else if (users.size() > 1) {
            // Handle case where there are multiple users with the same email
            return "Error: Multiple users found with the same email";
        } else {
            return "Invalid email or password";
        }
    }

    public String logout() {
        // Simulate logout logic
        return "Logout successful";
    }
}
