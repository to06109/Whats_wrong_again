package dev.wwa.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

import static javax.persistence.FetchType.*;

@Entity
@Getter @Setter
public class Report {

    @Id @GeneratedValue
    @Column(name = "report_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "debate_post_id")
    private DebatePosts debate_post;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "post_id")
    private Posts post_post;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "comment_id")
    private Comments comment_post;

    @NotNull
    private Long editor_id;

    @NotNull
    private LocalDateTime edit_date;

    private String report_category;

    private String contents;

}
