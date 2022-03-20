package dev.wwa.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Member {

    @Id @GeneratedValue
    @Column(name = "member_id")
    private Long id;

    @NotNull
    private String email;

    @NotNull
    private String PW;

    @NotNull
    private String Name;

    private String Phone_number;

    private String Profile_pic_path;

    private Long scrape_post_no;

    @OneToMany
    @JoinColumn(name = "member")
    private List<Posts> posts = new ArrayList<>();

}
