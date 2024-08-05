// package com.example.demo.Repository;

// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;

// import com.example.demo.Model.User;

// @Repository
// public interface UserRepository extends JpaRepository<User, Long> {
// }



package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Register;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<Register, Long> {
    List<Register> findByEmail(String email);
}
