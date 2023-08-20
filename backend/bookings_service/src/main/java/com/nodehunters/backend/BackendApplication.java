package com.nodehunters.backend;

import com.nodehunters.backend.auth.models.AuthUser;
import com.nodehunters.backend.auth.models.Role;
import com.nodehunters.backend.auth.repository.RoleRepository;
import com.nodehunters.backend.auth.repository.UserRepository;
import com.nodehunters.backend.entity.*;
import com.nodehunters.backend.repository.*;
import org.hibernate.Session;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.provider.HibernateUtils;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.sql.Date;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	CommandLineRunner run(RoleRepository roleRepository, UserRepository userRepository, PasswordEncoder passwordEncoder){
		return args -> {
			if(roleRepository.findByAuthority("ADMIN").isPresent()) return;
			Role adminRole = roleRepository.save(new Role("ADMIN"));

			Set<Role> roles = new HashSet<>();
			roles.add(adminRole);

			AuthUser admin = new AuthUser(1, "admin@email.com","admin", passwordEncoder.encode("adminpass"), roles);

			userRepository.save(admin);

		};
	}

	@Bean
	CommandLineRunner fillDatabase(AppUserRepository appUserRepository, BookingRepository bookingRepository, PaymentCardRepository paymentCardRepository, DestinationsRepository destinationsRepository, TourRepository tourRepository, UserRepository userRepository, PasswordEncoder passwordEncoder, RoleRepository roleRepository, PlacesToVisitRepository placesToVisitRepository, SpaceShipsRepository spaceShipsRepository){
		return args -> {
			System.out.println("Filling the database");
			// Create a from destination
			// Create a to destination
			// create a Tour

			Destination fromDestination = Destination.builder()
					.name("From Destination")
					.images(List.of("/assets/images/planet/jupiter/jupiter2.jpg"))
					.description("From Destination Description")
					.point("point1")
					.planet("region1")
					.build();
			fromDestination = destinationsRepository.save(fromDestination);

			Destination toDestination = Destination.builder()
					.name("To Destination")
					.images(List.of("/assets/images/planet/jupiter/jupiter3.jpg", "/assets/images/planet/jupiter/jupiter4.jpg"))
					.description("To Destination Description")
					.point("point2")
					.planet("region2")
					.build();
			toDestination = destinationsRepository.save(toDestination);

			SpaceShip spaceShip = SpaceShip.builder()
					.name("SpaceShip")
					.type("type1")
					.numberOfClassOneSeats(10)
					.numberOfClassTwoSeats(20)
					.numberOfClassThreeSeats(30)
					.registrationNumber("reg1")
					.description("SpaceShip Description")
					.images(List.of("/assets/images/planet/jupiter/jupiter3.jpg", "/assets/images/planet/jupiter/jupiter4.jpg"))
					.build();
			spaceShip = spaceShipsRepository.save(spaceShip);

			Tour tour = Tour.builder()
					.bookings(null)
					.classOneUnitPrice(10)
					.classTwoUnitPrice(20)
					.classThreeUnitPrice(30)
					.to(toDestination)
					.from(fromDestination)
					.departureDate(Date.valueOf("2024-05-05"))
					.arrivalDate(Date.valueOf("2026-05-05"))
					.spaceShip(spaceShip)
					.price(3000)
					.build();

			Destination fromDestination2 = Destination.builder()
					.name("From Destination2")
					.images(List.of("https://picsum.photos/200/300"))
					.description("From Destination Description2")
					.point("point1")
					.planet("region1")
					.build();
			fromDestination2 = destinationsRepository.save(fromDestination2);

			Destination toDestination2 = Destination.builder()
					.name("To Destination2")
					.images(List.of("/assets/images/planet/jupiter/jupiter3.jpg", "/assets/images/planet/jupiter/jupiter4.jpg"))
					.description("To Destination Description2")
					.point("point2")
					.planet("region2")
					.build();
			toDestination2 = destinationsRepository.save(toDestination2);

			SpaceShip spaceShip2 = SpaceShip.builder()
					.name("SpaceShip2")
					.type("type1")
					.numberOfClassOneSeats(10)
					.numberOfClassTwoSeats(20)
					.numberOfClassThreeSeats(30)
					.registrationNumber("reg1")
					.description("SpaceShip Description2")
					.images(List.of("/assets/images/planet/jupiter/jupiter3.jpg", "/assets/images/planet/jupiter/jupiter4.jpg"))
					.build();
			spaceShip2 = spaceShipsRepository.save(spaceShip2);


			Tour tour2 = Tour.builder()
					.bookings(null)
					.classOneUnitPrice(10)
					.classTwoUnitPrice(20)
					.classThreeUnitPrice(30)
					.to(toDestination2)
					.from(fromDestination2)
					.departureDate(Date.valueOf("2023-09-05"))
					.arrivalDate(Date.valueOf("2024-01-05"))
					.spaceShip(spaceShip2)
					.price(1000)
					.build();

			PlacesToVisit pl1 = PlacesToVisit.builder()
					.destination(toDestination2)
					.images(Arrays.asList("img1", "img2"))
					.name("vally")
					.build();
			PlacesToVisit pl2 = PlacesToVisit.builder()
					.destination(toDestination2)
					.images(Arrays.asList("img11", "img21"))
					.name("hill top")
					.build();
			PlacesToVisit pl3 = PlacesToVisit.builder()
					.destination(toDestination2)
					.images(Arrays.asList("img4", "img5"))
					.name("mountain")
					.build();


			tourRepository.save(tour);
			tourRepository.save(tour2);
			placesToVisitRepository.save(pl1);
			placesToVisitRepository.save(pl2);
			placesToVisitRepository.save(pl3);



			//Creating a auth user
			Role userRole = roleRepository.save(new Role("USER"));
			AuthUser authUser = AuthUser.builder()
					.email("testUser")
					.name("testUser@email.com")
					.password(passwordEncoder.encode("testUserPass"))
					.authorities(Set.of(userRole))
					.build();
			userRepository.save(authUser);
			AuthUser savedAuthUser = userRepository.findByEmail(authUser.getEmail()).get();

			// creating a app user
			AppUser appUser = AppUser.builder()
					.authUser(savedAuthUser)
					.cosmicId("cos_1")
					.build();
			appUser = appUserRepository.save(appUser);

			// creating a payment card
			PaymentCard paymentCard = PaymentCard.builder()
					.appUser(appUser)
					.cardNumber("123456789")
					.cardType("Visa")
					.build();
			paymentCardRepository.save(paymentCard);

			// creating a booking
			Booking booking = Booking.builder()
					.appUser(appUser)
					.tour(tour)
					.numberOfSeats(2)
					.bookingClass("class1")
					.build();
			bookingRepository.save(booking);
		};
	}
}
